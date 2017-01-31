var data = [{id:272822514,firstName:"Billy",lastName:"Bob",gender:"male",dob:"1/18/1949",height:71,weight:175,eyeColor:"brown",occupation:"programmer",parents:[],currentSpouse:401222887},{id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514},{id:409574486,firstName:"Michael",lastName:"Walkens",gender:"male",dob:"5/9/1951",height:76,weight:250,eyeColor:"brown",occupation:"landscaper",parents:[],currentSpouse:260451248},{id:260451248,firstName:"Jon",lastName:"Walkens",gender:"male",dob:"9/6/1945",height:62,weight:115,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:409574486},{id:629807187,firstName:"Jack",lastName:"Pafoy",gender:"male",dob:"3/16/1938",height:70,weight:207,eyeColor:"black",occupation:"nurse",parents:[],currentSpouse:464142841},{id:464142841,firstName:"Jen",lastName:"Pafoy",gender:"female",dob:"4/10/1940",height:72,weight:256,eyeColor:"black",occupation:"student",parents:[],currentSpouse:629807187},{id:982411429,firstName:"Mister",lastName:"Potatoo",gender:"male",dob:"12/18/1952",height:66,weight:170,eyeColor:"hazel",occupation:"architect",parents:[],currentSpouse:595767575},{id:595767575,firstName:"Missuz",lastName:"Potatoo",gender:"female",dob:"10/28/1948",height:59,weight:137,eyeColor:"blue",occupation:"architect",parents:[],currentSpouse:982411429},{id:693243224,firstName:"Joy",lastName:"Madden",gender:"female",dob:"4/20/1939",height:69,weight:199,eyeColor:"hazel",occupation:"doctor",parents:[],currentSpouse:null},{id:888201200,firstName:"Mader",lastName:"Madden",gender:"male",dob:"5/6/1937",height:76,weight:205,eyeColor:"black",occupation:"landscaper",parents:[],currentSpouse:null},{id:878013758,firstName:"Jill",lastName:"Pafoy",gender:"female",dob:"2/8/1972",height:74,weight:118,eyeColor:"brown",occupation:"programmer",parents:[401222887],currentSpouse:294874671},{id:951747547,firstName:"Ralph",lastName:"Bob",gender:"male",dob:"12/23/1969",height:66,weight:179,eyeColor:"blue",occupation:"nurse",parents:[401222887],currentSpouse:159819275},{id:159819275,firstName:"Jasmine",lastName:"Bob",gender:"female",dob:"12/18/1969",height:58,weight:156,eyeColor:"blue",occupation:"assistant",parents:[409574486,260451248],currentSpouse:951747547},{id:348457184,firstName:"Annie",lastName:"Pafoy",gender:"female",dob:"11/4/1970",height:62,weight:235,eyeColor:"hazel",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:294874671,firstName:"Dave",lastName:"Pafoy",gender:"male",dob:"8/5/1967",height:61,weight:112,eyeColor:"green",occupation:"doctor",parents:[629807187,464142841],currentSpouse:878013758},{id:931247228,firstName:"Amii",lastName:"Pafoy",gender:"female",dob:"3/13/1963",height:74,weight:184,eyeColor:"brown",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:822843554,firstName:"Regina",lastName:"Madden",gender:"female",dob:"7/26/1959",height:71,weight:249,eyeColor:"brown",occupation:"nurse",parents:[693243224,888201200],currentSpouse:null},{id:819168108,firstName:"Hana",lastName:"Madden",gender:"female",dob:"10/7/1953",height:70,weight:187,eyeColor:"brown",occupation:"politician",parents:[693243224,888201200],currentSpouse:null},{id:969837479,firstName:"Eloise",lastName:"Madden",gender:"female",dob:"12/11/1961",height:63,weight:241,eyeColor:"brown",occupation:"assistant",parents:[693243224,888201200],currentSpouse:null},{id:313207561,firstName:"Mattias",lastName:"Madden",gender:"male",dob:"2/19/1966",height:70,weight:110,eyeColor:"blue",occupation:"assistant",parents:[693243224,888201200],currentSpouse:313997561},{id:313997561,firstName:"Ellen",lastName:"Madden",gender:"female",dob:"2/19/1970",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[],currentSpouse:313207561},{id:313998e3,firstName:"Joey",lastName:"Madden",gender:"female",dob:"2/02/1987",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[313207561,313997561],currentSpouse:null}];

describe('getPersonWithName', function(){
  it('Jasmine Bob', function() {
    var Jasmine = {id:159819275,firstName:"Jasmine",lastName:"Bob",gender:"female",dob:"12/18/1969",height:58,weight:156,eyeColor:"blue",occupation:"assistant",parents:[409574486,260451248],currentSpouse:951747547};
    expect(getPerson("Jasmine", "Bob", data)).toEqual(Jasmine);
  });
});

describe('getPerson', function(){
  it('Jill Pafoy', function() {
    var person = {"id": 878013758,"firstName": "Jill","lastName": "Pafoy","gender": "female","dob": "2/8/1972","height": 74,"weight": 118,"eyeColor": "brown","occupation": "programmer","parents": [401222887],"currentSpouse": 294874671}
    expect(getPerson("Jill", "Pafoy", data)).toEqual(person);
  });
});

describe('getChildren', function(){
  it('twoKids', function() {
    var parent = {id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514};
    var kids = [{id:878013758,firstName:"Jill",lastName:"Pafoy",gender:"female",dob:"2/8/1972",height:74,weight:118,eyeColor:"brown",occupation:"programmer",parents:[401222887],currentSpouse:294874671},{id:951747547,firstName:"Ralph",lastName:"Bob",gender:"male",dob:"12/23/1969",height:66,weight:179,eyeColor:"blue",occupation:"nurse",parents:[401222887],currentSpouse:159819275}];
    expect(getChildren(parent, data)).toEqual(kids);
  });
});

describe('getChildren-empty', function(){
  it('noKids', function() {
   var emptyList = [];
   var parent = [{id:272822514,firstName:"Billy",lastName:"Bob",gender:"male",dob:"1/18/1949",height:71,weight:175,eyeColor:"brown",occupation:"programmer",parents:[],currentSpouse:401222887}];
   expect(getChildren(parent, data)).toEqual(emptyList);
 });
});

describe('getImmediateFamily', function(){
  it('immediate family of Billy Bob', function() {
    var Uma = [{id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514}];
    var Billy = [{"id": 272822514,"firstName": "Billy","lastName": "Bob","gender": "male","dob": "1/18/1949","height": 71,"weight": 175,"eyeColor": "brown","occupation": "programmer","parents": [],"currentSpouse": 401222887}];
    expect(getImmediateFamily(Billy[0], data)).toEqual(Uma);
  });
});

describe('getDescendant', function(){
  it('descendant of Mader', function() {
    var descendants = [{"id": 822843554, "firstName": "Regina", "lastName": "Madden", "gender": "female", "dob": "7/26/1959", "height": 71, "weight": 249, "eyeColor": "brown", "occupation": "nurse", "parents": [693243224, 888201200], "currentSpouse": null}, {"id": 819168108, "firstName": "Hana", "lastName": "Madden", "gender": "female", "dob": "10/7/1953", "height": 70, "weight": 187, "eyeColor": "brown", "occupation": "politician", "parents": [693243224, 888201200], "currentSpouse": null}, {"id": 969837479, "firstName": "Eloise", "lastName": "Madden", "gender": "female", "dob": "12/11/1961", "height": 63, "weight": 241, "eyeColor": "brown", "occupation": "assistant", "parents": [693243224, 888201200], "currentSpouse": null}, {"id": 313207561, "firstName": "Mattias", "lastName": "Madden", "gender": "male", "dob": "2/19/1966", "height": 70, "weight": 110, "eyeColor": "blue", "occupation": "assistant", "parents": [693243224, 888201200], "currentSpouse": 313997561}, {"id": 313998000, "firstName": "Joey", "lastName": "Madden", "gender": "female", "dob": "2/02/1987", "height": 67, "weight": 100, "eyeColor": "blue", "occupation": "doctor", "parents": [313207561, 313997561], "currentSpouse": null}];
    var Mader = [{"id": 888201200,"firstName": "Mader","lastName": "Madden","gender": "male","dob": "5/6/1937","height": 76,"weight": 205,"eyeColor": "black","occupation": "landscaper","parents": [],"currentSpouse": null}];
    expect(getDescendant(Mader[0], data)).toEqual(descendants);
  });
});

describe('getDescendant-empty', function(){
  it('descendant of Billy Bob', function() {
    var emptyList = [];
    var Billy = [{"id": 272822514,"firstName": "Billy","lastName": "Bob","gender": "male","dob": "1/18/1949","height": 71,"weight": 175,"eyeColor": "brown","occupation": "programmer","parents": [],"currentSpouse": 401222887}];
    expect(getDescendant(Billy[0], data)).toEqual(emptyList);
  });
});

describe('getNextOfKin', function(){
  it("getNextOfKin of Mader", function() {
    var Billy = [{"id": 272822514,"firstName": "Billy","lastName": "Bob","gender": "male","dob": "1/18/1949","height": 71,"weight": 175,"eyeColor": "brown","occupation": "programmer","parents": [],"currentSpouse": 401222887}];
    var Uma = [{"id":401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514}];
    expect(getNextOfKin(Uma[0], data)).toEqual(Billy);
  });
});

describe('getAge', function(){
  it('1/18/1949', function() {
    expect(calculateAge("1/18/1949")).toEqual(68);
  });
});

describe('getAge not valid', function(){
  it('return age', function() {
    expect(calculateAge("", data)).toEqual(NaN);
  });
});

describe('getMyAge', function(){
  it('3/5/1988', function(){
    expect(calculateAge('3/5/1988')).toEqual(28);
  });
});

describe('convertHeight', function(){
  it('convert 71', function() {
    expect(convertHeight(71)).toEqual("5'11''");
  });
});

describe('convertHeight other', function(){
  it("convert 5'11''", function() {
    expect(convertHeight("5'11''")).toEqual(NaN+"'"+NaN+"''");
  });
});

describe('getSpouse', function(){
  it('spouse of Billy', function(){
   var Uma = [{id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514}];
   var Billy = {id:272822514,firstName:"Billy",lastName:"Bob",gender:"male",dob:"1/18/1949",height:71,weight:175,eyeColor:"brown",occupation:"programmer",parents:[],currentSpouse:401222887};
   expect(getSpouse(Billy, data)).toEqual(Uma);
 });
});

describe('getSpouse-empty', function(){
  it('noSpouse', function(){
    var emptyList = [];
    var Annie = {"id": 348457184,"firstName": "Annie","lastName": "Pafoy","gender": "female","dob": "11/4/1970","height": 62,"weight": 235,"eyeColor": "hazel","occupation": "landscaper","parents": [629807187, 464142841],"currentSpouse": null};
    expect(getSpouse(Annie, data)).toEqual(emptyList);
  });
});

describe('getSiblings-empty', function(){
  it('noSiblings', function(){
    var emptyList = [];
    var billy = {id:272822514,firstName:"Billy",lastName:"Bob",gender:"male",dob:"1/18/1949",height:71,weight:175,eyeColor:"brown",occupation:"programmer",parents:[],currentSpouse:401222887};
    expect(getSiblings(billy, data)).toEqual(emptyList);
  });
});

// describe('getSiblings', function(){
//   it('siblings', function(){
//     var Annie = { "id": 348457184,"firstName": "Annie","lastName": "Pafoy","gender": "female","dob": "11/4/1970","height": 62,"weight": 235,"eyeColor": "hazel","occupation": "landscaper","parents": [629807187, 464142841],"currentSpouse": null};
//     var siblings = [{"id": 294874671, "firstName": 'Dave', "lastName": "Pafoy", "gender": "male", "dob": "8/5/1967", "height": 61, "weight": 112, "eyeColor": "green", "occupation": "doctor", "parents": [ 629807187, 464142841 ], "currentSpouse": 878013758 }, { "id": 931247228, "firstName": "Amii", "lastName": "Pafoy", "gender": "female", "dob": "3/13/1963", "height": 74, "weight": 184, "eyeColor": "brown", "occupation": "landscaper", "parents": [ 629807187, 464142841 ], "currentSpouse": null }];
//     expect(getSiblings(Annie, data)).toEqual(siblings);
//   });
// });