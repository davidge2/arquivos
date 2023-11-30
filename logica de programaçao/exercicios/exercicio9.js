function staircase(n) {
    // Write your code here
    let symbol = '#';
    let inputline = '';
    let inputPosition = n - 1;
    for(let lineIndex =0; lineIndex < n; lineIndex +=1){
        for(let columnIndex=0; columnIndex < n; columnIndex +=1){
            if(columnIndex < inputPosition){
                inputline += ' ';
            }else{
                inputline += symbol;
            }
        }
        console.log(inputline);
        inputline ='';
        inputPosition -= 1;
    }
}
staircase(6);




/*let i = 0
for(i =0; i<20; i++){
    console.log('#'.repeat(i));
}*/
