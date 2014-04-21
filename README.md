# Template destroyed callback is not called when parent element is removed.

## Steps to reproduce

1. Run the app.
2. Click on Render Template to render template.(On console log created callback is fired.)
3. Click on Remove Template to remove parent element.
4. Template is removed from the DOM but destroyed callback is not fired. (No console log).

Expected Behavior: As template is removed from DOM it should fire destroyed callback.

