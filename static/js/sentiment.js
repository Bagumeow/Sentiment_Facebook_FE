$(document).ready(function(){
    $('.btn-sentiment').click(function(){
        // console.log($('input[id="input-sentiment"]').val())
        context = $('input[id="input-sentiment"]').val()
        data_sentiment = {
            input_text: context
        }
        $.ajax({
            url: 'http://localhost:4040/sentiment',
            type: 'POST',
            headers: {Authorization: 'Bearer ' +  localStorage.getItem('token')},
            data: JSON.stringify(data_sentiment),
            contentType: 'application/json',
            dataType: 'json',
            success: function(data){
                
                const outputSpan= document.getElementById("output-sentiment")
                // deleted all children of outputSpan
                while(outputSpan.firstChild){
                    outputSpan.removeChild(outputSpan.firstChild);
                }
                if(outputSpan){
                    const paragraph = document.createElement("p")
                    if (data.sentiment=="Positive"){
                        paragraph.classList.add("text-success");
                        paragraph.textContent = "Bình luận trên là Tích cực";
                        // create mark element                                
                    }else if(data.sentiment=="Negative"){
                        paragraph.classList.add("text-danger");
                        paragraph.textContent = "Bình luận trên là Tiêu cực";
                    }else{
                        paragraph.classList.add("text-warning");
                        paragraph.textContent = "Bình luận luận trên là Trung lập";
                    }
                    outputSpan.appendChild(paragraph);
                    const logits = data.logits[0]
                    // return the highest value in the array
                    console.log(logits)
                    const max_values = Math.max(...logits)
                    const paragraph2 = document.createElement("p")
                    paragraph2.textContent = "Xác suất của dự đoán trên là: " 
                    const mark = document.createElement("mark");
                    mark.textContent = max_values.toFixed(2)+'%'
                    paragraph2.appendChild(mark)
                    outputSpan.appendChild(paragraph2)
                }
            }
        });		
    });
});
