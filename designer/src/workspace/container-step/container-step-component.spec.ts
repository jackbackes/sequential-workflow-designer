import { Dom } from '../../core/dom';
import { SequentialStep } from '../../definition';
import { StepContext } from '../../designer-extension';
import { createComponentContextStub } from '../../test-tools/stubs';
import { ContainerStepComponent } from './container-step-component';

describe('ContainerStepComponent', () => {
	it('create() creates component', () => {
		const parentElement = Dom.svg('svg');
		const step: SequentialStep = {
			id: '0x0',
			componentType: 'container',
			name: 'Foo',
			properties: {},
			type: 'foo',
			sequence: []
		};
		const stepContext: StepContext<SequentialStep> = {
			step,
			depth: 0,
			position: 0,
			isInputConnected: true,
			isOutputConnected: true,
			parentSequence: [step]
		};
		const componentContext = createComponentContextStub();
		const component = ContainerStepComponent.create(parentElement, stepContext, componentContext);

		expect(component).toBeDefined();
	});
});
