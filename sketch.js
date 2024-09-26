let suaidade;
let sertanejo;
let funk;
let gospel;
let título;
let corpo;
let música = {
  menor10:{
  sertanejo: "fazendinha",
  funk: "funk do Mickey",
  gospel: "minha família"
  },
  entre10e14:{
  sertanejo: "sonho de amor",
  funk: "bum bum tam tam",
  gospel: "advogado fiel"
  },
  entre14e16:{
  sertanejo: "é o amor",
  funk: "olha a explosão",
  gospel: "a tua voz"
  },
  entre16e18:{
  sertanejo: "a hora é agora",
  funk:"oh Juliana",
  gospel: "lugar secreto"
  },
  maior18:{
  sertanejo: "acertou a mão",
  funk: "chama no feijão",
  gospel: "ressuscita-me"
}
};

let button;

function setup() {
  createCanvas(850, 400).position(100,100);
  createSpan("Qual sua idade?").position(680,530).addClass("hidden");
  suaidade = createInput("").position(630,585).addClass("hidden");
  sertanejo = createCheckbox("Gosta de música sertanejo?🤔").position(100,600).addClass("hidden");
  funk = createCheckbox("Gosta de música funk?🤔").position(100,650).addClass("hidden");
  gospel = createCheckbox("Gosta de música gospel?🤔").position(100,700).addClass("hidden");
  título = "Matemasie"
  corpo = "Pixelify Sans";
  button = createButton("✨PLAY MUSIC✨").position(width/2,520);
  button.mousePressed(bota);
  button.addClass("botao");
}

function bota(){
  selectAll(".hidden").forEach((el) => el.removeClass("hidden"));
  button.hide();
}

function draw() {
  background("blue");
  fill("black");
  stroke("white");
  textAlign(CENTER,CENTER);
  textSize(40);
  text("MELHOR   INDICADOR   DE   MÚSICA", width/2, 30);
  textFont(corpo);
  
  
  let idade = parseInt(suaidade.value());
  let checksertanejo = sertanejo.checked();
  let checkfunk = funk.checked();
  let checkgospel = gospel.checked();
  let música = "SOLTA   O   SOM   DJ";
  if (suaidade.value() !== ""){
  música = mostramúsica(idade, checksertanejo, checkfunk, checkgospel);
  }
  fill("black");
  textAlign(CENTER, CENTER);
  textSize(40);
  text(música, width/2, height/2);
  textFont(título);
}

function mostramúsica(idade, checksertanejo, checkfunk, checkgospel){
  if (isNaN(idade)){
    return "idade inválida";
  } else
    if (idade < 5){
      return "VOCÊ É UMA CRIANÇA"
    } else
      if (idade > 120){
        return "JÁ FALECEU"
      }
  if (idade >= 5 && idade < 10){
    if (checksertanejo){
      return música["menor10"]["sertanejo"];
    }
    if (checkfunk){
      return música["menor10"]["funk"];
  }
    if (checkgospel){
      return música["menor10"]["gospel"];
    }
  }
  else if (idade >= 10 && idade < 14){
    if (checksertanejo){
      return música["entre10e14"]["sertanejo"];
    }
    if (checkfunk){
      return música["entre10e14"]["funk"];
  }
    if (checkgospel){
      return música["entre10e14"]["gospel"];
    }
  }
  else if (idade >= 14 && idade < 16){
    if (checksertanejo){
      return música["entre14e16"]["sertanejo"];
    }
    if (checkfunk){
      return música["entre14e16"]["funk"];
  }
    if (checkgospel){
      return música["entre14e16"]["gospel"];
    }
  }
  else if (idade >= 16 && idade < 18){
    if (checksertanejo){
      return música["entre16e18"]["sertanejo"];
    }
    if (checkfunk){
      return música["entre16e18"]["funk"];
  }
    if (checkgospel){
      return música["entre16e18"]["gospel"];
    }
  }
  else if (idade >= 18){
    if (checksertanejo){
      return música["maior18"]["sertanejo"];
    }
    if (checkfunk){
      return música["maior18"]["funk"];
  }
    if (checkgospel){
      return música["maior18"]["gospel"];
    }
  }
}