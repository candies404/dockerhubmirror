module.exports = {
    env: {
        LA_ID: process.env.ANALYTICS_51LA_ID,
        LA_CK: process.env.ANALYTICS_51LA_CK,
        LA_WIDGET_SCRIPT_URL: process.env.ANALYTICS_51LA_WIDGET_SCRIPT_URL,
        NEXT_PUBLIC_DOCKER_URL: process.env.NEXT_PUBLIC_DOCKER_URL || 'https://dockerpull.com', // 添加 Docker 镜像地址
    },
};
