(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(t,e,a){t.exports=a.p+"static/media/tag.f387d836.ico"},32:function(t,e,a){t.exports=a(69)},38:function(t,e,a){},39:function(t,e,a){},69:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),c=a(25),o=a.n(c),i=(a(38),a(31)),l=a(13),r=a(8),u=a(9),h=a(11),d=a(10),m=a(12),p=(a(39),a(15)),g=a(72),f=a(18),E=function(t){function e(){return Object(r.a)(this,e),Object(h.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return s.a.createElement(f.a,{to:"/notes/".concat(this.props.note.id),style:{textDecoration:"none",color:"inherit"},className:"note"},s.a.createElement("h3",{className:"card-title"},this.props.note.title),s.a.createElement("p",{className:"card-body"},this.props.note.contents))}}]),e}(s.a.Component),N=a(26),b=a.n(N),v=function(t){return s.a.createElement(b.a,{tag:"div",className:"note-list"},t.notes.map(function(t){return s.a.createElement(E,{key:t.id,note:t})}))},y=a(27),k=a(7),T=a.n(k),j=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(h.a)(this,Object(d.a)(e).call(this))).handleEditing=function(){t.setState({editing:!0})},t.handleEditingChange=function(e){t.setState(Object(l.a)({},e.target.name,e.target.value))},t.putNote=function(e){T.a.put("https://stark-refuge-65834.herokuapp.com/api/posts/".concat(e.id),Object(y.a)({},e)).then(function(e){t.props.fetchNotes()}).catch(function(t){return console.log(t)})},t.handleUpdate=function(e){e.preventDefault(),t.putNote(t.state),t.setState({editing:!1})},t.deleteNote=function(e){T.a.delete("https://stark-refuge-65834.herokuapp.com/api/posts/".concat(e)).then(function(e){t.props.fetchNotes()}).catch(function(t){return console.log(t)})},t.handleDelete=function(){t.deleteNote(t.state.id),t.props.history.push("/")},t.state={id:"",tags:[],title:"",contents:"",created_at:"",updated_at:"",editing:!1},t}return Object(m.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;T.a.get("https://stark-refuge-65834.herokuapp.com/api/posts/".concat(this.props.match.params.id)).then(function(e){t.setState({id:e.data.id,title:e.data.title,contents:e.data.contents,tags:e.data.tags,created_at:e.data.created_at,updated_at:e.data.updated_at})}).catch(function(t){return console.log(t.response)})}},{key:"render",value:function(){return s.a.createElement("div",{className:"note-detail"},s.a.createElement("header",{className:"body-header"},s.a.createElement("div",{className:"tags-container"},s.a.createElement("form",{className:"tags-form",onSubmit:this.props.handleSubmitTag},s.a.createElement("div",{className:"tags"},this.state.tags.map(function(t){return s.a.createElement("p",{className:"tag"},t)})),s.a.createElement("input",{className:"input-tags",type:"text",name:"tag",value:this.props.tag,onChange:this.props.handleInput,onSubmit:this.props.handleSubmitTag,placeholder:"add tags"})),s.a.createElement("div",{className:"btn-container"},s.a.createElement("button",{className:this.state.editing?"save-btn":"hide",onClick:this.handleUpdate},"save"),s.a.createElement("button",{className:"delete-btn",onClick:this.handleDelete},"delete"))),s.a.createElement("div",{className:"timeStamp"},s.a.createElement("p",null,"Created: ",this.state.created_at),s.a.createElement("p",null,"Updated: ",this.state.updated_at))),s.a.createElement("hr",null),s.a.createElement("h3",{onClick:this.handleEditing.bind(this),className:this.state.editing?"none":"note-title"},this.state.title),s.a.createElement("input",{className:this.state.editing?"input-title":"none",type:"text",value:this.state.title,name:"title",onChange:this.handleEditingChange.bind(this)}),s.a.createElement("p",{className:this.state.editing?"none":"note-body",onClick:this.handleEditing.bind(this)},this.state.contents),s.a.createElement("textarea",{className:this.state.editing?"input-body":"none",type:"textarea",value:this.state.contents,name:"contents",onChange:this.handleEditingChange.bind(this)}))}}]),e}(s.a.Component),O=function(t){return s.a.createElement("div",null,s.a.createElement("div",{className:"note-form"},s.a.createElement("header",{className:"body-header"},s.a.createElement("div",{className:"tags-container"},s.a.createElement("form",{className:"tags-form",onSubmit:t.handleSubmitTag},s.a.createElement("div",{className:"tags"},t.newTags.map(function(t){return s.a.createElement("p",{className:"tag",key:t},t)})),s.a.createElement("input",{className:"input-tags",type:"text",name:"tag",value:t.tag,onChange:t.handleInput,onSubmit:t.handleSubmitTag,placeholder:"add tags"})),s.a.createElement("div",{className:"btn-container"},s.a.createElement("button",{onClick:function(){var e={tags:t.newTags,title:t.title,contents:t.contents};t.postNotes(e),t.history.push("/")}},"Save")))),s.a.createElement("hr",null),s.a.createElement("input",{className:"input-title",type:"text",name:"title",value:t.value,onChange:t.handleInput,placeholder:"Title"}),s.a.createElement("textarea",{className:"input-body",type:"textarea",name:"contents",value:t.value,onChange:t.handleInput,placeholder:"Start writing..."})))},w=a(28),S=a.n(w),C=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(h.a)(this,Object(d.a)(e).call(this))).fetchNotes=function(){T.a.get("https://stark-refuge-65834.herokuapp.com/api/posts").then(function(e){t.setState({notes:e.data})}).catch(function(t){return console.log(t)})},t.fetchTags=function(){T.a.get("https://stark-refuge-65834.herokuapp.com/api/tags").then(function(e){t.setState({tags:e.data})}).catch(function(t){return console.log(t)})},t.handleInput=function(e){t.setState(Object(l.a)({},e.target.name,e.target.value))},t.handleSubmitTag=function(e){e.preventDefault(),t.setState({newTags:[].concat(Object(i.a)(t.state.newTags),[t.state.tag]),tag:""})},t.postNotes=function(e){T.a.post("https://stark-refuge-65834.herokuapp.com/api/posts",e).then(function(e){t.setState({tag:"",newTags:[],title:"",contents:""}),t.fetchNotes(),t.fetchTags()}).catch(function(t){return console.log(t)})},t.deleteTag=function(e){T.a.delete("https://stark-refuge-65834.herokuapp.com/api/tags/".concat(e)).then(function(e){t.fetchTags()}).catch(function(t){return console.log(t)})},t.confirmDeleteTag=function(e){window.confirm("Are you sure you want to delete this tag?")&&t.deleteTag(e)},t.state={notes:[],tags:[],newTags:[],tag:"",title:"",contents:"",_id:""},t}return Object(m.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.fetchNotes(),this.fetchTags()}},{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"header"},s.a.createElement(g.a,{to:"/",activeClassName:"activeNewNote",style:{textDecoration:"none",color:"inherit"}},s.a.createElement("h1",null,"Lambda Notes")),s.a.createElement(g.a,{to:"/new-note",activeClassName:"activeNewNote",style:{textDecoration:"none",color:"inherit"}},s.a.createElement("h2",null,"+ New Note")),s.a.createElement("div",{className:"tags"},s.a.createElement("div",{className:"tag-header"},s.a.createElement("img",{src:S.a,alt:"tag-icon",className:"tag-icon"}),s.a.createElement("h2",null,"Tags")),this.state.tags.map(function(e){return s.a.createElement("div",{className:"tag",key:e.id},s.a.createElement("p",null,e.tag),s.a.createElement("p",{className:"x hide",onClick:t.confirmDeleteTag.bind(t,e.id)},"|  x"))}))),s.a.createElement("div",{className:"body"},s.a.createElement(p.a,{path:"/new-note",render:function(e){return s.a.createElement(O,Object.assign({},e,{notes:t.state.notes,newTags:t.state.newTags,tag:t.state.tag,title:t.state.title,contents:t.state.contents,_id:t.state._id,handleInput:t.handleInput,handleSubmitTag:t.handleSubmitTag,fetchTags:t.fetchTags,postNotes:t.postNotes}))}}),s.a.createElement(p.a,{path:"/",exact:!0,component:function(){return s.a.createElement(v,{notes:t.state.notes})}}),s.a.createElement(p.a,{path:"/notes/:id",render:function(e){return s.a.createElement(j,Object.assign({},e,{notes:t.state.notes,fetchNotes:t.fetchNotes,handleInput:t.handleInput}))}})))}}]),e}(n.Component),x=a(71),D=a(73),_=function(t){function e(){return Object(r.a)(this,e),Object(h.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"componentDidUpdate",value:function(t){this.props.location!==t.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),e}(n.Component),I=Object(D.a)(_);o.a.render(s.a.createElement(x.a,null,s.a.createElement(I,null,s.a.createElement(C,null))),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.2e03374e.chunk.js.map