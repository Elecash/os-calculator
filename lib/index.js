#!/usr/bin/env node
const readJson = require('read-package-json');
const chalk = require('chalk');
const fetch = require('node-fetch');
const figlet = require('figlet');
const priceInquirer = require('./inquirers/price-inquirer');
const { read } = require('libnpmfund');

let price = 75;

const parsePackage = (pkg) => {
    const dependencies = Object.keys(pkg.dependencies || {});
    const devDependencies = Object.keys(pkg.devDependencies || {});
    const allDependencies = dependencies.concat(devDependencies);

    fetchPackage(allDependencies);
};

const fetchPackage = async (allDependencies) => {
    const response = await fetch('https://api.npms.io/v2/package/mget', {
        method: 'post',
        body: JSON.stringify(allDependencies),
        headers: { 'Content-Type': 'application/json' }
    });
    const body = await response.text();
    const resp = JSON.parse(body);

    parseResponse(resp);
};

const parseResponse = resp => {
    const responseArray = Object.values(resp).filter(repo => repo.collected && repo.collected.github);
    const pkgs = {};

    responseArray.forEach(pkg => {
        const organization = pkg.collected.metadata.name.split('/')[0];
        if (!pkgs[organization]) {
            pkgs[organization] = {
                organization: organization,
                starsCount: pkg.collected.github.starsCount,
                score: pkg.score.final,
                packages: [ pkg.collected.metadata.name ]
            };
        } else {
            pkgs[organization].packages.push(pkg.collected.metadata.name);
            pkgs[organization].score = pkgs[organization].score + pkg.score.final;
            pkgs[organization].starsCount = pkgs[organization].starsCount > pkg.collected.github.starsCount ?
                pkgs[organization].starsCount :
                pkg.collected.github.starsCount;
        }
    });

    const pkgsArray = Object.values(pkgs);

    const starsCount = Math.round(pkgsArray.reduce((p, n) => (n.starsCount / n.packages.length) + p, 0));
    const totalHours = Math.round(pkgsArray.reduce((p, n) => (n.starsCount * (n.score / n.packages.length) / 100) + p, 0));
    calculateValue(starsCount, totalHours);
    fetchFundingInfo();
};

const calculateValue = (starsCount, totalHours) => {
    if (totalHours) {
        const totalValue = Math.round(totalHours * price);
        console.log(
            chalk.green(
                figlet.textSync('OS Calc', { horizontalLayout: 'fill' })
            )
        );

        console.log(chalk.greenBright(`You're saving $${totalValue} weekly by using Open Source projects`));
    }
};

const fetchFundingInfo = async () => {
    const fundingInfo = await read();
    const deps = fundingInfo.dependencies;
    const dependencies = Object.keys(deps || {});

    console.log(chalk.redBright(`\nAll this projects are looking for some funding, consider supporting them:`));
    dependencies.forEach(depName => {
        const isFundingArray = Array.isArray(deps[depName].funding);

        if (isFundingArray) {
            console.log(`${depName}:`);
            deps[depName].funding.forEach(fundingMethod => {
                console.log(`    ${fundingMethod.url}`);
            });
        } else {
            console.log(`${depName}: ${deps[depName].funding.url}`);
        }
    });
};

const run = async () => {
    const priceResponse = await priceInquirer.askPrice();

    if (priceResponse && priceResponse.price) {
        price = priceResponse.price;
    }
    console.log(chalk.greenBright(`Your price/hour is $${price}`));

    readJson('./package.json', console.error, false, (error, data) => {
        if (error) {
            console.error(chalk.red('There was an error reading the file'));
            return;
        }

        parsePackage(data);
    });
};

run();
