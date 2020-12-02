module.exports = [
    {
        url: 'news/list',
        type: 'get',
        result: () => {
            return {
                error: '',
                status: 1,
                data: {
                    'list|5-10': [
                        {
                            'title': '@ctitle'
                        }
                    ]
                }
            }
        }
    }
]
