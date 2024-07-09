const getState = ({ getStore, getActions, setStore }) => {
	let apiUrl = "https://playground.4geeks.com/contact/";
	return {
	  store: {
		contacts: [],
	  },
	  actions: {
		createContactList: () => {},
		getContacts: () => {
			fetch(apiUrl+"agendas/chaolinespo/contacts")
			.then(resp=>resp.json())
			.then(data=>setStore({contacts:data.contacts}))
			.catch(error=>console.log(error))
		},
		addContact: async(contact) => {
			let response=await fetch(apiUrl+"agendas/chaolinespo/contacts",{
				method:"POST",
				headers:{"Content-Type":"application/json"},
				body:JSON.stringify({name:contact.name,email:contact.email,phone:contact.phone,address:contact.address})
			})
			if(response.status!=201){
				console.log(response.status)
				return false
			}else{
				let data = await response.json()
				console.log (data)
				getActions().getContacts()
				return true
			}
		},
		editContact: () => {},
		deleteContact: () => {},
	  },
	};
  };
  
  export default getState;
  