const statement = require('./statement')
const invoices = require('./invoices.json')
const plays = require('./plays.json')

test('statement test', () => {
    const statements = invoices.map((invoice) => statement(invoice, plays))

    expect(statements).toStrictEqual([
        '청구내역 (고객명: BigCo)\nHamlet : $650.00 (55석)\nAs You Like It : $580.00 (35석)\nOthello : $500.00 (40석)\n총액: $1,730.00\n적립 포인트: 47점\n',
    ])
})

test('comedy., tragedy 아니면 오류 냄?', () => {
    const errorPlays = {
        hamlet: { name: 'Hamlet', type: 'asdf' },
    }

    expect(() => {
        return invoices.map((invoice) => statement(invoice, errorPlays))
    }).toThrowError(new Error(`알 수 없는 장르 : asdf`))
})
