"use client";
import { useEffect } from "react";

export default function N8nChat() {
    useEffect(() => {
        // Inject <link> tag for chat styles
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
        document.head.appendChild(link);

        // Inject <script type="module"> exactly like in your HTML
        const script = document.createElement("script");
        script.type = "module";
        script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: 'https://somyas.app.n8n.cloud/webhook/41d1773c-c3c6-4ebf-852c-dbf00e48bd98/chat'
      });
    `;
        document.body.appendChild(script);

        // Cleanup on unmount
        return () => {
            document.head.removeChild(link);
            document.body.removeChild(script);
        };
    }, []);

    return null; // nothing to render
}
