import { Box, TextField } from '@mui/material';
import { TestConclusion } from '../../domain/types';
import { useMetadataStorage } from '../../repository/storageAdapter';
import { useUpdateConclusion } from '../../services/useUpdateConclusion';

export const Conclusion = (): JSX.Element => {
    const { conclusion } = useMetadataStorage();
    const updateConclusion = useUpdateConclusion();

    const handleConclusionChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        const value = event.target.value;
        updateConclusion(value as TestConclusion);
    };

    return (
        <Box component="form"
            noValidate
            autoComplete="off"
        >
            <TextField
                fullWidth={true}
                id="conclusion-multiline"
                multiline
                rows={4}
                value={conclusion}
                onChange={handleConclusionChange}
            />
        </Box>
    );
};