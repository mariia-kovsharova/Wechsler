import { TextField } from '@mui/material';
import { TestConclusion } from '../../domain/types';
import { useMetadataStorage } from '../../repository/storageAdapter';
import { useUpdateConclusion } from '../../services/useUpdateConclusion';

const MIN_ROWS = 4;

export const Conclusion = (): JSX.Element => {
    const { conclusion } = useMetadataStorage();
    const updateConclusion = useUpdateConclusion();

    const handleConclusionChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        const value = event.target.value;
        updateConclusion(value as TestConclusion);
    };

    return (
        <TextField
            fullWidth={true}
            id="conclusion-multiline"
            className="conclusion-container"
            multiline
            minRows={MIN_ROWS}
            value={conclusion}
            onChange={handleConclusionChange}
        />
    );
};