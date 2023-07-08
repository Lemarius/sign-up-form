import { useState } from 'react';
import {
	StyledAd,
	StyledAdH2,
	StyledAdSpan,
	StyledContainer,
	StyledError,
	StyledErrorCont,
	StyledForm,
	StyledFormCont,
	StyledH1,
	StyledImg,
	StyledInput,
	StyledP,
	StyledSubmit,
	StyledTerms,
	StyledTermsSpan,
	StyledTitle
} from './styles';

const Main = () => {
	const [values, setValues] = useState({
		name: '',
		lastname: '',
		email: '',
		password: ''
	});

	const [submitted, setSubmitted] = useState(false);
	return (
		<>
			<StyledContainer>
				<StyledTitle>
					<StyledH1>Learn to code by watching others</StyledH1>
					<StyledP>
						See how experienced developers solve problems in real-time. Watching
						scripted tutorials is great, but understanding how developers think
						is invaluable.
					</StyledP>
				</StyledTitle>
				<StyledFormCont>
					<StyledAd>
						<StyledAdH2>
							<StyledAdSpan>Try it free 7 days</StyledAdSpan> then $20/mo.
							thereafter
						</StyledAdH2>
					</StyledAd>
					<StyledForm onSubmit={e => handleSubmit(e, values, setSubmitted)}>
						<StyledInput
							type='text'
							placeholder='Name'
							onChange={e => setValues({ ...values, name: e.target.value })}
							className={
								(submitted && values.name === '') || /\d/.test(values.name)
									? 'error'
									: ''
							}
						/>

						{submitted && values.name === '' ? (
							<StyledErrorCont>
								<StyledError>First Name cannot be empty</StyledError>
								<StyledImg src='./images/icon-error.svg' />
							</StyledErrorCont>
						) : (
							''
						)}
						{submitted && /\d/.test(values.name) ? (
							<StyledErrorCont>
								<StyledError>First Name should not contain numbers</StyledError>
								<StyledImg src='./images/icon-error.svg' />
							</StyledErrorCont>
						) : (
							''
						)}

						<StyledInput
							type='text'
							placeholder='Last Name'
							onChange={e => setValues({ ...values, lastname: e.target.value })}
							className={
								(submitted && values.lastname === '') ||
								/\d/.test(values.lastname)
									? 'error'
									: ''
							}
						/>
						{submitted && values.lastname === '' ? (
							<StyledErrorCont>
								<StyledError>Last Name cannot be empty</StyledError>
								<StyledImg src='./images/icon-error.svg' />
							</StyledErrorCont>
						) : (
							''
						)}
						{submitted && /\d/.test(values.lastname) ? (
							<StyledErrorCont>
								<StyledError>Last Name should not contain numbers</StyledError>
								<StyledImg src='./images/icon-error.svg' />
							</StyledErrorCont>
						) : (
							''
						)}
						<StyledInput
							type='email'
							placeholder='Email Address'
							onChange={e => setValues({ ...values, email: e.target.value })}
							className={submitted && values.email === '' ? 'error' : ''}
						/>
						{submitted && values.email === '' ? (
							<StyledErrorCont>
								<StyledError>Email cannot be empty</StyledError>
								<StyledImg src='./images/icon-error.svg' />
							</StyledErrorCont>
						) : (
							''
						)}
						<StyledInput
							type='password'
							placeholder='Password'
							onChange={e => setValues({ ...values, password: e.target.value })}
							className={submitted && values.password === '' ? 'error' : ''}
						/>
						{submitted && values.password === '' ? (
							<StyledErrorCont>
								<StyledError>Password cannot be empty</StyledError>
								<StyledImg src='./images/icon-error.svg' />
							</StyledErrorCont>
						) : (
							''
						)}
						<StyledSubmit type='submit' value='CLAIM YOUR FREE TRIAL' />
						<StyledTerms>
							By clicking the button, you are agreeing to our{' '}
							<StyledTermsSpan>Terms and Services</StyledTermsSpan>
						</StyledTerms>
					</StyledForm>
				</StyledFormCont>
			</StyledContainer>
		</>
	);
};

const handleSubmit = (e, values, setSubmitted) => {
	e.preventDefault();
	if (values.name === '') {
		console.log('Name field is required');
		setSubmitted(true);
	} else if (/\d/.test(values.name)) {
		console.log('Name field should not contain numbers');
		setSubmitted(true);
	} else {
		setSubmitted(false);
	}

	if (values.lastname === '') {
		console.log('Last name field is required');
		setSubmitted(true);
	} else if (/\d/.test(values.lastname)) {
		console.log('Last name field should not contain numbers');
		setSubmitted(true);
	}

	if (values.email === '') {
		console.log('Email field is required');
		setSubmitted(true);
	} else {
		setSubmitted(false);
	}

	if (values.password === '') {
		console.log('Password field field is required');
		setSubmitted(true);
	} else {
		setSubmitted(false);
	}
};

export default Main;
