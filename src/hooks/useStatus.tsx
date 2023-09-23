import { useMemo } from 'react';

const useStatus = ( is_active : boolean) => {

    const formatStatus = useMemo(
        () => {
            if(is_active === true) {
                return 'Active'
            }

            return 'Deactive'
        },
        [is_active]

    )

    return formatStatus
}

export default useStatus