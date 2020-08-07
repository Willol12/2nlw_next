
//data
const proffys = [
  {
  name:"Diego Fernandes",
  avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
  whatsapp:"27982312532",
  bio: "Entusiasta das melhores tecnologias de química avançada Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
  subject:"Química",
  cost:"23",
  weekday:[0],
  time_from:[720],
  time_to: [1220] 
},
{
name:"Willian",
avatar: "https://avatars2.githubusercontent.com/u/55475453?s=460&u=de845078a091b31d3dd97c2695a0f46fa59805e6&v=4" ,
whatsapp:"27996612532",
bio: "Entusiasta de astrofisica e fisica quantica. Apaixonado por oque a fisica pode proporcionar ao ser humano",
subject:"Fisica",
cost:"20",
weekday:[0],
time_from:[720],
time_to: [1220]
},
{
  name:"Willian Cossuol",
  avatar: "https://avatars2.githubusercontent.com/u/55475453?s=460&u=de845078a091b31d3dd97c2695a0f46fa59805e6&v=4" ,
  whatsapp:"27996612532",
  bio: "Entusiasta de astrofisica e fisica quantica. Apaixonado por oque a fisica pode proporcionar ao ser humano",
  subject:"Fisica",
  cost:"20",
  weekday:[0],
  time_from:[720],
  time_to: [1220]
  }
]
  const subjects = [
    
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
  ]

  const weekdays = [
    
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ]
//funcionalidades
function getSubject(subjectNumber) {
  const position =+subjectNumber-1
   return subjects[position]
}

function pageLanding(req, res) {
  return res.render("index.html")
}
function pageStudy(req, res) {
  const filters =req.query
  return res.render("study.html", {proffys, filters, subjects, weekdays})
}
function pageGiveClasses(req, res) {
  const data =req.query
  //[]
  const isNotEmpty = Object.keys(data).length > 0
  //se tiver data
  if (isNotEmpty) {
   
    data.subject = getSubject(data.subject)
    //adicionar data a lista de proffys
    proffys.push(data)
    return res.redirect("/study")
  }
  //se não, não adicionar
  return res.render("give-classes.html", {subjects, weekdays})
}
//servidor
const express = require('express')
const server = express()

//configurar nunjucks(template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCashe: true,
})
//Inicio e configuração do servidor
server
//Configurar arquivos estaticos css, scripts, images
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//start do servidor
.listen(5500)

