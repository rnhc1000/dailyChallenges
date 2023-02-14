var person = {
  name : "John"
};

function printName()
{
  console.log(this.name);
}

printName();

printName.call(person)

let boundPrintName = printName.bind(person);

boundPrintName();
