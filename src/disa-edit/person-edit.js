class PersonEdit extends Polymer.Element {
  
  static get is() { return 'person-edit'; }

  static get properties() {
    return {
      person: {
        type: Object
      },
      sex: Object
    };
  }

  static get observers() {
    return [
    ]
  }

  constructor() {
    super();
  }
  
  connectedCallback() {
    super.connectedCallback();
  }

  __getOptions(key, options) {
    return Utils.__getOptions(key, options);
  }

  __indexOf(value, key, options) {
    return Utils.__indexOf(value, key, options);
  }

  addName() {
    let newNames = [];
    Utils.cloneArray(newNames, this.person.names);
    newNames.push(new PersonName());
    this.set('person.names', newNames);
  }

  removeName(e) {
    let index = e.path[0].dataIndex;
    let newNames = [];
    Utils.cloneArray(newNames, this.person.names);
    newNames.splice(index, 1);
    this.set('person.names', newNames);
  }

  createFromData(formData) {
    let person = new Person();
    
    let firstNames = formData['firstName[]'];
    firstNames = Utils.makeArray(firstNames);
    let lastNames = formData['lastName[]'];
    lastNames = Utils.makeArray(lastNames);
    let nameTypes = formData['nameType[]'];
    nameTypes = Utils.makeArray(nameTypes);
    // hope that they don't have different lengths
    // they shouldn't but you never know what might happen
    let names = [];
    for (let i = 0; i < firstNames.length; ++i) {
      let personName = new PersonName();
      personName.firstName = firstNames[i];
      personName.lastName = lastNames[i];
      personName.type = nameTypes[i];
      names.push(personName);
    }
    person.names = names;

    let tribe = formData['tribe'];
    person.tribe = tribe;

    let origin = formData['origin'];
    person.origin = origin;

    let race = formData['race'];
    person.race = race;

    let sex = formData['sex'];
    person.sex = sex;

    let age = formData['age'];
    person.age = age;

    let vocation = formData['vocation'];
    person.vocation = vocation;

    let father = new Parent();

    let fatherName = new ParentName();

    let fatherFirstName = formData['fatherFirstName'];
    fatherName.firstName = fatherFirstName;
    let fatherLastName = formData['fatherLastName'];
    fatherName.lastName = fatherLastName;

    father.name = fatherName;

    let fatherOrigin = formData['fatherOrigin'];
    father.origin = fatherOrigin;
    
    let fatherRace = formData['fatherRace'];
    father.race = fatherRace;

    let fatherStatus = formData['fatherStatus'];
    father.status = fatherStatus;

    let fatherOwner = new Owner();
    
    let fatherOwnerName = new OwnerName();

    let fatherOwnerTitle = formData['fatherOwnerTitle'];
    fatherOwnerName.title = fatherOwnerTitle;

    let fatherOwnerFirstName = formData['fatherOwnerFirstName'];
    fatherOwnerName.firstName = fatherOwnerFirstName;

    let fatherOwnerLastName = formData['fatherOwnerLastName'];
    fatherOwnerName.lastName = fatherOwnerLastName;

    fatherOwner.name = fatherOwnerName;

    let fatherOwnerVocation = formData['fatherOwnerVocation'];
    fatherOwner.vocation = fatherOwnerVocation;

    father.owner = fatherOwner;

    person.father = father;

    //
    let mother = new Parent();

    let motherName = new ParentName();

    let motherFirstName = formData['motherFirstName'];
    motherName.firstName = motherFirstName;
    let motherLastName = formData['motherLastName'];
    motherName.lastName = motherLastName;

    mother.name = motherName;

    let motherOrigin = formData['motherOrigin'];
    mother.origin = motherOrigin;
    
    let motherRace = formData['motherRace'];
    mother.race = motherRace;

    let motherStatus = formData['motherStatus'];
    mother.status = motherStatus;

    let motherOwner = new Owner();
    
    let motherOwnerName = new OwnerName();

    let motherOwnerTitle = formData['motherOwnerTitle'];
    motherOwnerName.title = motherOwnerTitle;

    let motherOwnerFirstName = formData['motherOwnerFirstName'];
    motherOwnerName.firstName = motherOwnerFirstName;

    let motherOwnerLastName = formData['motherOwnerLastName'];
    motherOwnerName.lastName = motherOwnerLastName;

    motherOwner.name = motherOwnerName;

    let motherOwnerVocation = formData['motherOwnerVocation'];
    motherOwner.vocation = motherOwnerVocation;

    mother.owner = motherOwner;

    person.mother = mother;

    return person;
  }
}

window.customElements.define(PersonEdit.is, PersonEdit);
