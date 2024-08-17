const inputMarkup=document.querySelectorAll("textarea")[0],
outputMarkup=document.querySelectorAll("textarea")[1],
output=document.querySelector("output"),
EMPTY="",
fragment=document.createElement("article");

inputMarkup.addEventListener("input", process);
outputMarkup.addEventListener("input", updateOutputfromOutputMarkup);

outputMarkup.is=function(string){this.value=string;}
outputMarkup.clear=function(){this.is(EMPTY);}

output.is=function(string){this.innerHTML=string;}
output.clear=function() {this.is(EMPTY);}

fragment.is=function(string) {this.innerHTML=string;}
fragment.clear=function() {fragment.is(EMPTY);}

fragment.remove=function(attribute) {
    this.is(inputMarkup.value);

    elements=this.querySelectorAll(`[${attribute}]`);

    if(elements.length>0) {
        for(let index=0;index<elements.length;index++) {
            elements[index].removeAttribute(attribute);
        }
    }
}

function process() {
    outputMarkup.clear();
    output.clear();

    if(inputMarkup.value.length>0) {

        fragment.clear();
        fragment.is(inputMarkup.value);
        fragment.remove("style");

        outputMarkup.clear();
        outputMarkup.is(fragment.innerHTML);
        
        updateOutputfromOutputMarkup();

    }

    return;
}

function updateOutputfromOutputMarkup() {
    output.clear();
    output.is(outputMarkup.value);
    return;
}