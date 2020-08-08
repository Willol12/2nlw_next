const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
  //estrategia de inserir dados
  proffyValue = {
    name: 'Mayk Brito',
    avatar: 'https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4',
    whatsapp: '899232332',
    bio: 'Matematico'
  }

  classValue = {
    subject: 1,
    cost: "20",
    //proffy_id vira pelo banco de dados
  }

  classScheduleValues = [
  //class_id vira pelo banco de dados apos cadastrarmos a aula
  {
    weekday: 1,
    time_from:720,
    time_to: 1220
  },

  {
    weekday: 0,
    time_from:520,
    time_to: 1220
  }
]

//await createProffy(db, {proffyValue, classValue, classScheduleValues})
//const Database = require('sqlite-async')

//consultar os dados inseridos
//todos os proffys
const selectedProffys = await db.all("SELECT *FROM proffys")
//console.log(selectedProffys)

//consultar as classes de um determinado professor
//e trazer juntos os dados do professor
const selectClassesAndProffys = await db.all (`
  SELECT classes.*,proffys.*
  FROM proffys
  JOIN classes ON (classes.proffy_id = proffys.id)
  WHERE classes.proffy_id = 1;
  `)
//console.log(selectClassesAndProffys)

//O horario que a pessoa trabalha por exemplo é das 8hr até as 18hrs
//o horario do time from é 8hrs precisa ser menor ou igual ao horario solicitado
//o time too precisa ser maior

const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "1300"
    AND class_schedule.time_to > "1300"


`)

console.log(selectClassesSchedules)
})