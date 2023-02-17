const { Province } = require('./Province')
const { sampleProvinceData } = require('./sampleProvinceData')
const assert = require('assert')

describe('province', () => {
    it('shortfall', () => {
        const asia = new Province(sampleProvinceData())
        assert.equal(asia.shortfall, 5)
    })
})
