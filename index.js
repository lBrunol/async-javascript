function bloqueioRenderizacao(){
  for(let i = 0; i < 150000; i++){
    console.log(i);
  }
}

function bloqueioRenderizacaoAsync(){
  setTimeout(bloqueioRenderizacao, 1000);
}