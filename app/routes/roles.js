/*
 * @Author: 唐云 
 * @Date: 2021-07-25 21:48:41 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-07-25 22:01:21
 * 用户路由
 */
const Router = require('koa-router')
const router = new Router({ prefix: '/roles' })
const jwt = require('koa-jwt')

const { find, create, update, delete: del } = require('../controllers/roles')

const { secret } = require('../config/jwt')

/**
 * 认证中间件
 */
const auth = jwt({ secret }) // 生成的用户信息在ctx.state上

router.get('/', auth, find)
router.post('/', auth, create)
router.patch('/:id', auth, update)
router.delete('/:id', auth, del)

module.exports = router