var copyTargetText = (trigger) => {
    var target = document.querySelector(trigger.attributes['data-clipboard-target'].value);
  
    // get filtered text
    let exclude = '.linenos, .gp';

    // Include hidden parts of code block
    let hiddenCodeBlocks = target.querySelectorAll('.only');
    for (let hiddenCodeBlock of hiddenCodeBlocks) {
        exclude += ', ' + '#' + hiddenCodeBlock.id;
    }
  
    let text = filterText(target, exclude);
    return formatCopyText(text, '$', false, true, true, true, '', '')
}