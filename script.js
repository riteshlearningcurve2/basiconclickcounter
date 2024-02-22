let c = document.getElementById('count')
let val = document.getElementById('oddeven')
let count = 0



function incr()
{ if(count<20)
    {
        count++
    c.textContent = count
    
    }else{
        alert("Limit Reached")
        
    }
    checkevenodd()
    
}

function dncr()

{   if(count==0)
    {
        count = 0
    }
    else{
        count--
    c.textContent = count
    }

    checkevenodd()
    
}


function resetbtn()
{
    count =0
    c.textContent = count
}

function checkevenodd()
{
    if(count%2==0){
        val.textContent = "Even"
    }else{
        val.textContent = "Odd"
    }
}


   
 