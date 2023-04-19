
export const handleSubmit = (query,setResult, setRefresh) => {
    setRefresh(true);
    const eventSource = new EventSource(
        "https://take-home-endpoints-yak3s7dv3a-el.a.run.app/sse"
      );
      eventSource.onmessage = (event) => {
        
        try{
            const data = JSON.parse(event.data);
         
            if(data["user_stats"]){

                eventSource.close();
                setRefresh(false);
                
                }
                else{
                    setResult(data.choices[0].text);
                }
        }
        catch(e){

            console.log("ERrrrrrrrr");
            if(event?.data["user_stats"]){
            eventSource.close();
            }
        }
        
        
        // setResult(data);
      };
}
