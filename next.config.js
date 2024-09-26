module.exports = {
    env: {
        LA_ID: process.env.ANALYTICS_51LA_ID,
        LA_CK: process.env.ANALYTICS_51LA_CK,
        LA_WIDGET_SCRIPT_URL: process.env.ANALYTICS_51LA_WIDGET_SCRIPT_URL,
        NEXT_PUBLIC_DOCKER_URL: process.env.NEXT_PUBLIC_DOCKER_URL || 'https://dockerpull.com',
        NEXT_PUBLIC_FOOTER_CONTENT: process.env.NEXT_PUBLIC_FOOTER_CONTENT || "© 2024 <a href='https://github.com/candies404/dockerhubmirror'>candies404</a>. All rights reserved.", // 添加页脚 HTML 代码
    },
};
