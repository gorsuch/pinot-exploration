goog.provide('pinot_exploration.stuff');
goog.require('cljs.core');
goog.require('pinot.html');
goog.require('pinot.html.tags');
pinot_exploration.stuff.test = (function test(){
return goog.global['alert'].call(null,"this is a test");
});
pinot_exploration.stuff.test.call(null);
pinot_exploration.stuff.todo_form = (function todo_form(){
return pinot.html.html.call(null,pinot.html.tags.form_to.call(null,cljs.core.ObjMap.fromObject(["﷐'id"],{"﷐'id":"todoForm"}),cljs.core.Vector.fromArray(["﷐'post","/todos"]),pinot.html.tags.label.call(null,"todoText","Todo: "),pinot.html.tags.text_field.call(null,"todoText"),pinot.html.tags.submit_button.call(null,cljs.core.ObjMap.fromObject(["﷐'class"],{"﷐'class":"submit"}),"add todo")));
});
pinot.html.append_to.call(null,pinot.html.dom_find.call(null,"body"),pinot.html.html.call(null,cljs.core.Vector.fromArray(["﷐'div",pinot_exploration.stuff.todo_form.call(null)])));
