const { Province } = require('./Province')
const { sampleProvinceData } = require('./sampleProvinceData')
const { expect } = require('chai')

describe('province', () => {
    let asia
    beforeEach(() => {
        asia = new Province(sampleProvinceData())
    })
    it('shortfall', () => {
        expect(asia.shortfall).equal(5)
    })

    it('profit', () => {
        expect(asia.profit).equal(230)
    })
})
