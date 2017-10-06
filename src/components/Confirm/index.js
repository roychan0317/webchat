import Vue from 'vue'
import '../Alert/index.css'
import './index.css'

const root = window.document.body

export default function Alert(config) {
  const wrap = document.createElement('div')
  const div = document.createElement('div')

  root.appendChild(wrap)
  wrap.appendChild(div)

  config = config || {}

  return new Promise(resolve => new Vue({
    el: div,
    data: {
      title: config.title || '',
      content: config.content || ''
    },
    methods: {
      submit() {
        root.removeChild(wrap)
        resolve('submit')
      },
      close() {
        root.removeChild(wrap)
        resolve('close')
      }
    },
    template: `
      <div class="wind-alert">
        <div class="wind-alert-bg"></div>
        <div class="wind-alert-dialog animate-scale">
          <div class="wind-alert-title">{{title}}</div>
          <div class="wind-alert-content">{{content}}</div>
          <div class="wind-confirm-btns" >
            <div class="wind-confirm-btn" @click="submit">确定</div>
            <div class="wind-confirm-btn" @click="close">取消</div>
          </div>
        </div>
      </div>
    `
  }))
}
