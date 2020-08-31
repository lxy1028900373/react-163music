const path = require("path");

// 拼接(原始路径， 现在)
const resolve = dir => path.resolve(__dirname, dir);

module.exports= {
    webpack: {
        alias: {
            "@": resolve("src"),
            "components": resolve("src/components")
        }
    }
}