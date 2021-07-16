const select = new Select('.select', {
        placeholder: 'Default text',
        selectedId: '3',
        data: [
            {id: '1', value: 'React'},
            {id: '2', value: 'Vue'},
            {id: '3', value: 'Angular'},
            {id: '4', value: 'Next'},
            {id: '5', value: 'NodeJs'},
        ],
        onSelected(item){
            console.log('Selected item', item);
        }
    })


select