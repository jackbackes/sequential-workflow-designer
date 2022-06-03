import { Dom } from '../core/dom';
import { createDesignerContextFake } from '../designer-context-faker';
import { SmartEditor } from './smart-editor';

describe('SmartEditor', () => {

	it('create() creates editor', () => {
		const parent = Dom.element('div');
		const context = createDesignerContextFake();

		const editor = SmartEditor.create(parent, context);

		expect(editor).toBeDefined();
		expect(parent.children.length).not.toEqual(0);
	});
});
