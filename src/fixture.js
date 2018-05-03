require('./database-connection')
const CaseModel = require('./case-model')
const data = require('../data.json')

async function main() {
  try {
    await CaseModel.create(data)
    console.log(`done. ${data.length} records inserted.`)
    process.exit()
  } catch (e) {
    console.log(e)
  }
}

main()
