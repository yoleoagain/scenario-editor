module.exports = function override(config, env) {
    return {...config, 
      resolve: { extensions: [".ts", ".tsx", ".js"] }
    }
}