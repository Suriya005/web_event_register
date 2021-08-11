const helpers = require('./helper')

test('should return string value',() => {
    const userIdLength = 10
    const result = helpers.generateUserId(userIdLength)

    expect(result).toHaveLength(userIdLength)
})