import { useEffect, useRef } from 'react';

export default function Home() {

    const dockerUrl = process.env.NEXT_PUBLIC_DOCKER_URL;
    const footerContent = process.env.NEXT_PUBLIC_FOOTER_CONTENT; // 获取页脚内容

    const laWidgetContainer = useRef(null);

    useEffect(() => {
        if (!process.env.LA_WIDGET_SCRIPT_URL) {
            console.error('LA_WIDGET_SCRIPT_URL 未定义');
            return;
        }
        const script = document.createElement('script');
        script.src = process.env.LA_WIDGET_SCRIPT_URL;
        script.async = true;
        script.id = "LA-DATA-WIDGET";
        script.setAttribute('crossorigin', 'anonymous');
        script.setAttribute('charset', 'UTF-8');

        laWidgetContainer.current.appendChild(script);

        // 可选：组件卸载时移除脚本
        return () => {
            laWidgetContainer.current.removeChild(script);
        };
    }, []);

    return (
        <div>
            <div className="container">
                <h1>Docker Pull</h1>
                <p>用爱发电 低调使用</p>
                <div className="addresses">
                    <p>地址①: <a href="https://dockerpull.com" target="_blank" rel="noopener noreferrer">dockerpull.com</a></p>
                    <p>地址②: <a href="https://dockerproxy.cn" target="_blank" rel="noopener noreferrer">dockerproxy.cn</a></p>
                </div>
                <div className="start-button">
                    <span
                        onClick={() =>
                            document.getElementById('usage-1').scrollIntoView({ behavior: 'smooth' })
                        }
                    >
                        开始
                    </span>
                </div>
            </div>

            <div className="usage-section" id="usage-1">
                <h3>使用方法①</h3>
                <p>假如拉取原始镜像命令如下</p>
                <pre>docker pull whyour/qinglong:latest</pre>

                <p>仅需在原命令前缀加入加速镜像地址 例如：</p>
                <pre>{`docker pull ${dockerUrl.replace('https://', '')}/whyour/qinglong:latest`}</pre>

                <h3>使用方法②</h3>
                <p>一键设置镜像加速：修改文件 /etc/docker/daemon.json（如果不存在则创建）</p>
                <pre>/etc/docker/daemon.json</pre>

                <p>修改JSON文件 更改为以下内容 然后保存</p>
                <pre>{`{"registry-mirrors": ["${dockerUrl}"]}`}</pre>

                <p>保存好之后 执行以下两条命令</p>
                <pre>
                    sudo systemctl daemon-reload #重载systemd管理守护进程配置文件
                    <br />
                    sudo systemctl restart docker #重启 Docker 服务
                </pre>
            </div>

            <div className="footer">
                {/* 使用 dangerouslySetInnerHTML 渲染 HTML 页脚 */}
                <p dangerouslySetInnerHTML={{__html: footerContent}}/>
                <p ref={laWidgetContainer}>
                    {/* 51la 统计数据将被插入到这里 */}
                </p>
            </div>

            {/* 全局样式 */}
            <style jsx global>{`
                body {
                    font-family: 'Microsoft YaHei', Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f0f0f0;
                    text-align: center;
                }
                .footer a {
                    color: #2980b9;
                    text-decoration: none;
                    font-weight: bold;
                    transition: color 0.3s ease, text-decoration 0.3s ease; /* 添加平滑过渡效果 */
                }
                .footer a:hover {
                    color: #576574;
                    text-decoration: underline;
                }
            `}</style>

            {/* 组件内样式 */}
            <style jsx>{`
                .container {
                    background-color: #4a90e2;
                    padding: 50px 20px;
                    color: white;
                }

                h1 {
                    font-size: 48px;
                    margin-bottom: 10px;
                }

                .addresses {
                    margin: 20px 0;
                }

                .addresses p {
                    margin: 10px 0;
                    font-size: 18px;
                }

                .addresses a {
                    color: white;
                    text-decoration: underline;
                }

                .start-button {
                    margin: 30px 0;
                }

                .start-button span {
                    background-color: white;
                    color: #3b5998;
                    padding: 10px 20px;
                    text-decoration: none;
                    font-size: 18px;
                    border-radius: 5px;
                    transition: background-color 0.3s;
                    cursor: pointer;
                }

                .start-button span:hover {
                    background-color: #dddddd;
                }

                .usage-section {
                    margin: 50px auto;
                    padding: 20px;
                    background-color: white;
                    border-radius: 10px;
                    width: 80%;
                    max-width: 800px;
                    text-align: left;
                    line-height: 1.6;
                }

                .usage-section h3 {
                    text-align: center;
                    font-size: 22px;
                    margin-bottom: 10px;
                    font-weight: bold;
                }

                .usage-section p {
                    font-weight: 700;
                    font-size: 16px;
                    margin-bottom: 5px; /* 修改为更小的边距 */
                }

                .usage-section pre {
                    font-family: 'Consolas', 'Courier New', monospace;
                    background-color: #f5f5f5;
                    padding: 10px 15px;
                    border-radius: 5px;
                    font-size: 15px;
                    line-height: 1.5;
                    color: #333;
                    border: 1px solid #e1e1e1;
                    white-space: pre-wrap; /* 长代码换行 */
                    word-wrap: break-word;
                    margin-bottom: 20px;
                    margin-top: 5px; /* 修改为更小的边距 */
                }

                .footer {
                    margin-top: 30px;
                    font-size: 16px;
                    color: #2c3e50;
                    font-weight: bold;
                }
                                
            `}</style>
        </div>
    );
}
