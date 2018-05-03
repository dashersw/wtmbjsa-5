require('console.table')
require('./database-connection')
const CaseModel = require('./case-model')


async function main() {
  let rec = await CaseModel.find()
  console.log(rec)
}

main()
