export const create_UUID = () =>{
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
}

export const getContent =(html)=>{
  const indexImage = html.search('<img');
  if(indexImage ==-1) return html;
  const content2= html.slice(indexImage);
  const indexEnd = content2.search('/>');
  const imgTag = content2.slice(0,indexEnd)+'/>';
  const newHTML = html.replace(imgTag,'');
  return getContent(newHTML);
};