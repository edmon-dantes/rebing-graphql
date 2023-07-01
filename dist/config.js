import * as fs from 'fs';
import path from 'path';
const loadConfig = () => {
    const configPath = path.resolve(__dirname, 'rebing-graphql.config.js');
    let config = {
        aipUrl: ''
    };
    if (fs.existsSync(configPath)) {
        const userConfig = require(configPath);
        config = userConfig.default ?? userConfig;
    }
    else {
        fs.writeFileSync(configPath, `module.exports = ${JSON.stringify(config, null, 2)};`);
    }
    return config;
};
export { loadConfig };
//# sourceMappingURL=config.js.map