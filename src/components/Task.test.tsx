import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Task from './Task';


test('Correctly Renders Task Name', () => {
    render(<Task task={ {label:"Task ABC", start:new Date(), last_update: new Date(), status:false} } updateFunction={()=> console.log("Update")} cancelFunction={()=> console.log("Cancel")} />);
    const taskElement = screen.getByText(/Task ABC/i);
    expect(taskElement).toBeInTheDocument();

    const notTaskElement = screen.queryByText(/Task 1/i);
    expect(notTaskElement).not.toBeInTheDocument();
});