import {Select} from './select/select'

const select = new Select('#app', {
	data: [
		id: '1', value: '50 push-up'
	]
})

select.render()