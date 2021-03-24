const getTemplate = (data = [], select) => {
	const items = ''

	return `
		<div>
			<ul>${data}</ul>
		</div>
	` 

}

export class Select {
	constructor(selector, value){
		this.$el = document.querySelector(selector)
	}

	render(){
		const {placeholder}
	}

	setup(){
		this.clickHandler = this.clickHandler.dind(this)
		
	}
}