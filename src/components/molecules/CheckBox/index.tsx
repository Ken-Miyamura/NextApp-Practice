import Flex from '@/components/layout/Flex';
import Text from '@/components/atoms/Text';
import { useRef, useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { CheckBoxIcon, CheckBoxOutlineBlankIcon } from '@/components/atoms/IconButton';

export interface CheckBoxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue'> {
  label?: string;
}

const CheckBoxElement = styled.input`
  display: none;
`;

const Label = styled.label`
  cursor: pointer;
  margin-left: 6px;
  user-select: none;
`;

// チェックボックス
const CheckBox = (props: CheckBoxProps) => {
  const { id, label, onChange, checked, ...rest } = props;
  const [isChecked, setIsChecked] = useState(checked);
  const ref = useRef<HTMLInputElement>(null);
  const onClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      // チェックボックスを強制的にクリック
      ref.current?.click();
      setIsChecked((isChecked) => !isChecked);
    },
    [ref, setIsChecked],
  );

  useEffect(() => {
    // パラメータからの変更を受け付ける
    setIsChecked(checked ?? false);
  }, [checked]);

  return (
    <>
      <CheckBoxElement
        {...rest}
        ref={ref}
        type='checkbox'
        checked={isChecked}
        readOnly={!onChange}
        onChange={onChange}
      />
      <Flex alignItems='center'>
        {/* チェックボックスのon/offの描画 */}
        {checked ?? isChecked ? (
          <CheckBoxIcon size={20} onClick={onClick} />
        ) : (
          <CheckBoxOutlineBlankIcon size={20} onClick={onClick} />
        )}
        {/* チェックボックスンのラベル */}
        {label && label.length > 0 && (
          <Label htmlFor={id} onClick={onClick}>
            <Text>{label}</Text>
          </Label>
        )}
      </Flex>
    </>
  );
};

export default CheckBox;
