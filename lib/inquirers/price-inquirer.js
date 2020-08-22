const priceInquirer = require('inquirer');

module.exports = {
    askPrice: () => {
        const questions = [
            {
                name: 'price',
                type: 'number',
                default: 75,
                message: 'Enter price hour:',
                validate: (value) => {
                    if (!Number.isNaN(value)) {
                        return true;
                    } else {
                        return 'Please enter a valid number:';
                    }
                }
            }
        ];
        return priceInquirer.prompt(questions);
    }
};
