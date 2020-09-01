const optional =
    [
        {
            type: "list",
            name: "appLinter",
            message: "Select the router you would like to use",
            choices: [
                "React Router (Recommended)",
                "Wouter (Advanced)",
            ],
        }
    ]

module.exports = optional;
