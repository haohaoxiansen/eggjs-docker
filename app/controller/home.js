'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log('hello, eggjs docker success');
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
