// const anchor = document.querySelector('a')!;
// console.log(anchor.href)
// if (anchor) {
// 	console.log(anchor.href)
// }
import { Invoice } from "./modules/invoice.js";
import { Payment } from "./modules/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./modules/ListTemplate.js";


const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children)

const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// List template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)
form.addEventListener('submit', (e: Event) => {
	e.preventDefault();
	let doc: HasFormatter;
	let values : [string, string, number]
	values = [tofrom.value, details.value, amount.valueAsNumber]
	if (type.value === 'invoice') {
		doc = new Invoice(...values)
	} else {
		doc = new Payment (tofrom.value, details.value, amount.valueAsNumber )
	}
	list.render(doc, type.value, 'end')
	tofrom.value = ''
	details.value = ''
	amount.valueAsNumber = 0
})

//Classes
// class Invoice {
// 	readonly client : string;
// 	private details: string;
// 	public amount: number;

// 	constructor(c: string, d: string, a: number) {
// 		this.client = c;
// 		this.details = d;
// 		this.amount = a; 
// 	}

// 	format() {
// 		return `${this.client} owes £${this.amount} for ${this.details}`;
// 	}
// }

// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on luigi website', 300);

// console.log(invOne, invTwo)

// let invoices: Invoice[] = []
// invoices.push(invOne)
// invoices.push(invTwo)
// console.log(invoices)

// invoices.forEach(inv => {
// 	console.log(inv.client, inv.amount, inv.format());
// })


//interfaces
//    
let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'we work', 250);
docTwo = new Payment('muigi', 'work hard', 300);

let docs: HasFormatter[] = []

docs.push(docOne);
docs.push(docTwo)

console.log(docs)