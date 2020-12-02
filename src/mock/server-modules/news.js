const Mock = require('mockjs')

export default {
    'GET /mock/news/list': (req, res) => {
        return res.json({
            error: '',
            status: 1,
            data: Mock.mock({
                'list|5-10': [
                    {
                        'title': '@ctitle'
                    }
                ]
            })
        })
    }
}
