export const handleSubmit = (query, setResult, setRefresh) => {
    setRefresh(true);
    
    const eventSource = new EventSource(
        "https://take-home-endpoints-yak3s7dv3a-el.a.run.app/sse"
    );

    eventSource.onmessage = (event) => {
        try {
            const data = JSON.parse(event.data);
            if (data["user_stats"]) {
                throw new Error("User stats received");
            } else {
                setResult(data.choices[0].text);
            }
        } catch (error) {
            console.error("Error handling SSE message:", error.message);
        } finally {
            eventSource.close();
            setRefresh(false);
        }
    };

    eventSource.onerror = (error) => {
        console.error("SSE connection error:", error);
        eventSource.close();
        setRefresh(false);
    };
};
