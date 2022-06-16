                        alert('text')
                        startTime()

                        var data=new Date();
                        var meses=new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");
                        var dia=data.getDate();
                        var mes=data.getMonth();
                        var ano=data.getFullYear();
                        /*document.write("Brasil, " + dia + " de " + meses[mes] + " de " + ano + "<br>");*/
                        console.log("Brasil, " + dia + " de " + meses[mes] + " de " + ano + "<br>")
                        document.getElementById('textodata').innerHTML="Brasil, " + dia + " de " + meses[mes] + " de " + ano + "<br>";
                    
                        function startTime()
                        {
                        var today=new Date();
                        var h=today.getHours();
                        var m=today.getMinutes();
                        var s=today.getSeconds();
                        // add a zero in front of numbers<10
                        m=checkTime(m);
                        s=checkTime(s);
                        /*document.getElementById('txt').innerHTML=h+":"+m+":"+s;*/
                        document.getElementById('txt').innerText=h+":"+m+":"+s;
                        t=setTimeout('startTime()',500);
                        
                        }
                        
                        function checkTime(i)
                        {
                        if (i<10)
                          {
                          i="0" + i;
                          }
                        return i;
                        }
                        